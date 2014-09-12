function Calendar(){
    this.asd = document.getElementById("asd");
      
    this.init();
                
}

Calendar.prototype = {
    oPrev: null,
    oNext: null,

    init:function(){
        var now = new Date();
        this.c_year = this.year = now.getFullYear(); //获取当年年份
        this.c_month = this.month = now.getMonth();  //获取当月月份
        this.fillDate(this.year,this.month);               
    },

    fillDate:function(year,month){

        var today = new Date().getDate();  //获取今天是几号

        var firstDay = new Date(year,month,1).getDay();  //获取本月第一天是星期几

        firstDay = firstDay==0? 7 :firstDay;   //表头空几格

        var lastDay = new Date(year,month+1,0).getDay(); //获取本月最后一天是星期几

        var totalDay = new Date(year,month+1,0).getDate(); //获取本月最后一天是几号

        var lastTotalDay = new Date(year,month,0).getDate();//获取上月最后一天是几号

        dayLeft = 42 - firstDay - totalDay;  //表尾留几格

        //开始绘制日历
        var html = "";
        html += '<div class="calendar">';
        html += '<span id="calendar_prev" class="calendar_prev calendar_top"><</span><span class="calendar_cols3 calendar_top">'+year+' 年 '+(month+1)+' 月'+'</span><span id="calendar_next" class="calendar_next calendar_top">></span>';
        html += '<span class="calendar_head">日</span>';
        html += '<span class="calendar_head">一</span>';
        html += '<span class="calendar_head">二</span>';
        html += '<span class="calendar_head">三</span>';
        html += '<span class="calendar_head">四</span>';
        html += '<span class="calendar_head">五</span>';
        html += '<span class="calendar_head">六</span>';

        for( var i = firstDay; i>0; i--){
            html += '<span class="calendar_gray">' + (lastTotalDay-i+1) +'</span>';
        }

        for( var i = 1; i<=totalDay; i++){
            if(year==this.c_year && this.c_month==month && i==today){
                html += '<span class="calendar_normal current">' + i + '</span>';
            }else{
                html += '<span class="calendar_normal">' + i + '</span>';
            }
        }

        for( var i=1; i<=dayLeft; i++){
            html += '<span class="calendar_gray">' + i + '</span>';
        }

        html += '</div>';

        document.getElementById("asd").innerHTML = html;

        this.next();
        this.prev();

    },

    prev:function(){

        var _that = this;
        this.oPrev = document.getElementById("calendar_prev");
        this.oPrev.onclick = function(){
            _that.month --;
            if(_that.month < 0){
                _that.month = 11;
                _that.year--;
            }
             _that.fillDate(_that.year,_that.month);
        }
    },

    next:function(){
        this.oNext = document.getElementById("calendar_next"); 
        var _that = this;
        this.oNext.onclick = function(){
            _that.month ++;
            if(_that.month>11){
                _that.month = 0;
                _that.year++;
            }
            // 填充日历
            _that.fillDate(_that.year,_that.month);
        }
    }

}

