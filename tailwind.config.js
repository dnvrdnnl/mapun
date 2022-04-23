module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '80px' : '80px',
        '100px' : '100px',
        '150px' : '150px',
        '200px' : '200px',
        '250px' : '250px',
        '300px' : '300px',
        '350px' : '350px',
        '400px' : '400px',
        '500px' : '500px',
        '550px' : '505px',
        '600px' : '600px',
        '800px' : '800px',
        '1000px' : '1000px',
        '1300px' : '1300px',
      },
      height: {
        '50px' : '50px',
        '70px' : '70px',
        '80px' : '80px',
        '100px' : '100px',
        '150px' : '150px',
        '200px' : '200px',
        '220px' : '220px',
        '250px' : '250px',
        '300px' : '300px',
        '400px' : '400px',
        '450px' : '450px',
        '500px' : '500px',
        '600px' : '600px',
        '700px' : '700px',
        '800px' : '800px',
      },
      colors: {
        'rgba_black' : 'rgba(0,0,0,0.5)',
        'blue' : '#064789',
      },
      dropShadow: {
        '0-35-35_rgaba_black-8': '0 7px 3px rgba(0, 0, 0, 1)',
      }
    },
    screens: {
      'screen250px' : {'max' : '250px'},
      'screen300px' : {'max' : '300px'},
      'screen350px' : '350px',
      'screen400px' : {'max' : '400px'},
      'screen450px' : {'max' : '450px'},
      'screen500px' : {'max' : '500px'},
      'screen550px' : {'max' : '550px'},
      'screen600px' : '600px',
      'screen650px' : {'max' : '650px'},
      'screen670px' : {'max' : '670px'},
      'screen700px' : {'max' : '700px'},
      'screen800px' : {'max' : '800px'},
      'screen900px' : {'max' : '900px'},
      'screen950px' : {'max' : '950px'},
      'screen1160px' : {'max' : '1160px'},
    },  
  },
  plugins: [],
}