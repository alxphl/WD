import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const styles = StyleSheet.create({
  scrollView: {
      backgroundColor: 'rgb(61, 53, 99)',
  },
  engine: {
    position: 'absolute',
    right: 0,
    
  },
  body: {
    backgroundColor: 'rgb(61, 53, 99)',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
   
  },
  highlight: {
    fontWeight: '700',
   
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
   
  },
   container: {
    flex: 1,
    
  },
  slideContainer: {
    flex: 1,
    
  },
  slide: {
    backgroundColor: 'rgb(61, 53, 99)',
    width: '100%',
    height:'100%',
    alignItems:'center',
    justifyContent: "center"
  },        
   googleBackground: {
    backgroundColor: 'rgb(199, 199, 199)',
    width: '100%',
    height:'45%',
    alignItems: "center",
    textAlign:'auto'
   
  },                                
});

export default styles;
