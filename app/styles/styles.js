const colors = {
  primaryOrange: '#E7623A',
  primaryBlue: '#27A5E2',
  paletteLightBlue: '#C4E2F1',
  paletteDarkBlue: '#',
  paletteTeal: '#A4ECD8',
  paletteGreen: '#56A073',
  palettePink: '#',
  paletteViolet: '#C72654',
  palettePurple: '#B29CC8',
  whiteOne: '#FFFFFF',
  whiteTwo: '#FAFAFA',
  whiteThree: '#F1F1F1',
  whiteFour: '#F8F6F6',
  whiteFive: '#C3C3C3',
  shadowGrey: '#333333',
  greyTwo: '#909090',
}
const styles = {
  form: {

  },
  content: {
    flex: 1,
    minHeight: 350,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  container: {
    flex: 1
  },
  userBarImage: {

  },
  image: {
    flex: 1,
    minWidth: 40,
    minHeight: 40,
  },
  RoundBtnStyle: {
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryOrange,
    borderRadius: 100/4
  },
  BtnTextStyle: {
    textTransform: 'uppercase',
    fontSize: 18,
    color: colors.whiteOne,
  }
}

export { styles, colors }
