var JwtSparkLine=React.createClass({displayName: "JwtSparkLine",
    componentDidMount:function(){
        this.renderSparkline()
    },
  componentDidUpdate: function(){
    this.renderSparkline()
  },
  render: function(){
   return React.createElement("span", null)
  },
  renderSparkline:function(){
      var data=(this.props.data instanceof Array)?this.props.data:this.props.data.split(',');
      $(this.getDOMNode()).sparkline(data, this.props.options);
  }
});
export default JwtSparkLine;