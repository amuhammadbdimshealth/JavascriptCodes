var JwtSelectItem=React.createClass({displayName: "JwtSelectItem",
  getInitialState:function(){
      return {data: []}
  },
  checkItem:function(e){
    this.state.data['_chk_']=e.target.checked;
    this.props.checkItem();
    this.setState({data:this.state.data});
  },
  render: function(){
    var item=this.props.data;
    this.state.data=item;
    if(this.props.render){
          return React.createElement("div", {className: "item"}, React.createElement("label", null, React.createElement("input", {checked: item['_chk_'], onChange: this.checkItem, type: "checkbox"}), " ", React.createElement("span", {dangerouslySetInnerHTML: {__html: this.props.render(item, this.props.index)}})))
    }
    if(this.props.displayField){
          return React.createElement("div", {className: "item"}, React.createElement("label", null, React.createElement("input", {checked: item['_chk_'], onChange: this.checkItem, type: "checkbox"}), " ", item[this.props.displayField]))
    }    
  }
  
});
export default JwtSelectItem;