import React, {
    View,
    BackAndroid,
    Dimensions,
    TouchableHighlight,
    LayoutAnimation,
    Animated,
    Easing,
    TouchableWithoutFeedback,
    Image,
    StyleSheet,
    Text
} from 'react-native';
class ImageDetailCmp extends React.Component {

  // static propTypes = {
  //   image: 
  // };

  constructor(props) {
    super(props);
    this.image = props.image;
    this.state = {
      h : new Animated.Value(0.5),
      w : new Animated.Value(0.5)
    };
  }


  /*
    Transition animation for image from a single card view to a full screen size!
   */
  componentWillMount() {
   LayoutAnimation.spring();
  }

  componentDidMount(){
    // make an image to full size of the screen.
    Animated.timing(this.state.h, {
        toValue: height * 1,
        duration: 500,
        easing: Easing.linear
    }).start();
    Animated.timing(this.state.w, {
        toValue: width * 1,
        duration: 500,
        easing: Easing.linear
    }).start();

  }

  _onBackClick(){
    const {navigator} = this.props;
    if(navigator) {
      navigator.pop();
    }
  }

  /*
    Touch the image to go back to the previous navigation scene.
   */
  render() {
    return(
      <View style={{flex :1}}>
        {/*<View style = {styles.headerBar}>
          <TouchableHighlight underlayColor="rgba(34, 26, 38, 0.1)" onPress={()=>this._onBackClick()}>
            <Image style = {styles.iconImage} source = {require('../../images/icon_back.png')}></Image>
          </TouchableHighlight>
          <Text style = {styles.headerText}>{this.image.who}</Text>
          <Text style = {styles.headerText}>{this.image.desc}</Text>
        </View>*/}
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          <TouchableWithoutFeedback onPress={()=>this._onBackClick()}>
            <Animated.Image style = {{height:this.state.h, width:this.state.w}} source = {{uri:this.image.url}}></Animated.Image>
          </TouchableWithoutFeedback>
        </View>

      </View>
    );
  }
}
let {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  iconImage: {
    height: 30,
    margin: 4,
    width: 30
  },
  headerBar: {
    backgroundColor: '#27B5EE',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 10
  },
  headerText: {
    fontSize: 22,
    color: 'white',
    marginLeft: 10
  }
});
export{ ImageDetailCmp as default };
