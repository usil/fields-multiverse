'use strict';
    
module.exports = {
    async findEquivalencesBySourceAndTarget(ctx) {

        if(typeof ctx.request.query.source_system === 'undefined'  || 
            !ctx.request.query.source_system || ctx.request.query.source_system.length === 0 ){
            return ctx.badRequest('source_system is missing');
        }

        if(typeof ctx.request.query.target_system === 'undefined'  || 
            !ctx.request.query.target_system || ctx.request.query.target_system.length === 0 ){
            return ctx.badRequest('target_system is missing');
        }        

        if(ctx.request.query.target_system === ctx.request.query.source_system){
            return ctx.badRequest('source_system cannot be equal to target_system');
        }

        if (!/^[a-zA-Z_\d\-]*$/g.test(ctx.request.query.source_system)) {
            return ctx.badRequest('source_system has not allowed characters');
        }  
        
        if (!/^[a-zA-Z_\d\-]*$/g.test(ctx.request.query.target_system)) {
            return ctx.badRequest('target_system has not allowed characters');
        }  

        let rows;

        try {
            rows = await strapi.db.connection('equivalences_v1').select(
                ["base_field_name", "base_field_value", ctx.request.query.source_system+"_value", 
                    ctx.request.query.target_system+"_value"]);
        } catch (error) {
            return ctx.badRequest('Failed while equivalences were being retrieved');
        }
        
        var response = {};
        try {
            for(var row of rows){
                if(typeof response[row["base_field_name"]] === 'undefined'){
                    response[row["base_field_name"]] = {}
                }
        
                var keys = Object.keys(row);
                response[row["base_field_name"]][row[keys[2]]] = row[keys[3]];
            }
        } catch (error) {
            return ctx.badRequest('Failed while equivalences were being parsed');
        }         
        
        return response;
    }
};