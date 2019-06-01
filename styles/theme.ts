export interface ITheme {
  palette: {
    primary: string;
  };
  spacing: {
    unit: number;
  };
}

const mainTheme = {
  palette: {
    darkPrimary: '#000000'
  },
  spacing: {
    unit: 8
  }
};

export default mainTheme;
