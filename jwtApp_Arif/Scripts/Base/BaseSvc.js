
class BaseSvc
{
    constructor(http){
        
        this.http=http;
    }
    getDummyData(obj){ 
      
           return this.http.post('Jwt/GetDummyData',obj);        		
    }
    getTableData(spName, spParams){
        
        if(!angular.isArray(spParams)){
            spParams=this.getParams(spParams);
        }
         return  this.http.post('Repository/GetTableData',{spName:spName, spParams:spParams}); 
    }
    getScalarValue(spName, spParams){
        
         if(!angular.isArray(spParams)){
            spParams=this.getParams(spParams);
         }
         return  this.http.post('Repository/getScalarValue',{spName:spName, spParams:spParams}); 
    }
    exportExcel(spName, spParams, fileName){
        
         if(!angular.isArray(spParams)){
            spParams=  angular.toJson(this.getParams(spParams));
         }
       window.location='Repository/ExportExcel/?spName='+spName+'&spParams='+spParams+'&fileName='+fileName;
    }
    getParams(obj){
        var paramList=[];
        for(var key in obj){
            if(key!=='$$hashKey')
            paramList.push({name:key, value:obj[key]});
        }
        return paramList;
    }
}
export default BaseSvc;