const config = {
  key_field: "key",
  title_field: "title",
  render_field: "render_html",
  format:{
  	date: 'YYYY-MM-DD',
  	month: 'YYYY-MM',
  	year: 'YYYY',
  	time: 'HH-mm-ss',
  	datetime: 'YYYY-MM-DD HH-mm-ss'
  },
  datePickerOptions:{
    shortcuts:{
      today: {
        title: "今天",
        value(){
          return new Date();
        }
      },
      yesterday: {
        title: "昨天",
        value(){
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24);
          return date;
        }
      }
    }
  },
  weeks: ['日', '一', '二', '三', '四', '五', '六'],
  months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一', '十二'],
};


export default config;