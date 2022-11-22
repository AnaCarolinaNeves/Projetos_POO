export default class FormataData {
    
    public formatarData(ano:string, mes:string, dia:string):Date{
        if( mes == "1" ){
            mes = "0"
        }else{
            mes =`${parseInt(mes) -1}`;
        }

    let year = new Number(ano)
    let mounth = new Number(mes)
    let day = new Number(dia)

        return new Date(year.valueOf(), mounth.valueOf(), day.valueOf())
    }
}