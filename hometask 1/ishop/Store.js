
var IshopBlock= React.createClass({

    displayName: 'IshopBlock',
  
    propTypes: {
      nameStore: React.PropTypes.string.isRequired, // название магазина
      products: React.PropTypes.array.isRequired, // товары, их кол-во, картинка

    },
  
    render: function() {
  
      var productsCode=this.props.products.map( (v) =>
          React.DOM.div({key:v.code,className:'Product'},
          React.DOM.img({ src: v.img, alt: "",className:'Img' }),
          React.DOM.span({className:'Name'},v.name),
          React.DOM.span({className:'Count'},v.count),
          React.DOM.span({className:'Price'},v.price),
         

          )
        );
      return React.DOM.div( {className:'IshopBlock'}, 
        React.DOM.div( {className:'nameStore'}, this.props.nameStore ),
        React.DOM.div( {className:'Products'}, productsCode),
      );
    },
  
  });