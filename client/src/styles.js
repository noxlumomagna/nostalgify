import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 25,
    margin: '30px 0',
    height: '95px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontFamily:'Edu VIC WA NT Beginner, cursive',
    color: 'purple'
  },
  image: {
    marginRight: '15px',
  },
  [theme.breakpoints.down('sm','xs')]:{
  mainContainer: {
    flexDirection: "column-reverse"
  }
}
}));
