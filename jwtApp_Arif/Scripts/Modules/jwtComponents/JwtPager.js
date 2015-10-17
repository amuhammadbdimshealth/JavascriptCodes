var JwtPager=React.createClass({
    displayName:'Pager',
	getInitialState:function(){
		return {limit:20, pageNo:1, totalRow:0, totalPage:0, firstClass:'disabled', lastClass:''}
	},
    onFirst:function(){
		this.state.pageNo=1;
		this.props.onPageChange(this.state.pageNo);
		this.setState({firstClass:'disabled', lastClass:''});
	},
	onLast:function(){
		this.state.pageNo=this.state.totalPage;
		this.props.onPageChange(this.state.pageNo);	
		this.setState({firstClass:'', lastClass:'disabled'});
	},
	onPrevious:function(){		
		if(this.state.pageNo>1){
			this.state.pageNo--;
			this.props.onPageChange(this.state.pageNo);
			this.setState({firstClass:this.state.pageNo===1?'disabled':'', lastClass:''});
		}else{
			this.setState({firstClass:'disabled', lastClass:''});
		}
	},
	onNext:function(){
		if(this.state.totalPage>this.state.pageNo){
			this.state.pageNo++;
			this.props.onPageChange(this.state.pageNo);	
			this.setState({firstClass:'', lastClass:this.state.totalPage==this.state.pageNo?'disabled':''});
		}else{
			this.setState({firstClass:'', lastClass:'disabled'});
		}
	},
	componentDidMount:function(){
        this.state.limit=this.props.limit;
		this.state.totalRow=this.props.totalRow;
		this.state.totalPage=parseInt(this.props.totalRow/this.props.limit)+((this.props.totalRow%this.props.limit==0)?0:1);
		
    },
    render:function(){
    	var classNames='pagination pull-'+this.props.pos;
        return(
            React.createElement("ul", {className: classNames}, 
			   React.createElement("li", {className: this.state.firstClass}, React.createElement("a", {onClick: this.onFirst, href: "javascript:;"}, React.createElement("span", {className: "glyphicon glyphicon-step-backward"}))), 
               React.createElement("li", {className: this.state.firstClass}, React.createElement("a", {onClick: this.onPrevious, href: "javascript:;"}, React.createElement("span", {className: "glyphicon glyphicon-arrow-left"}))), 
               React.createElement("li", {className: this.state.lastClass}, React.createElement("a", {onClick: this.onNext, href: "javascript:;"}, React.createElement("span", {className: "glyphicon glyphicon-arrow-right"}))), 
			   React.createElement("li", {className: this.state.lastClass}, React.createElement("a", {onClick: this.onLast, href: "javascript:;"}, React.createElement("span", {className: "glyphicon glyphicon-step-forward"})))
            )
            )
    }
});

export default JwtPager;