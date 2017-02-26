const CurrentData = {
  display_location: {
    full: 'Den'
  },
  temp_f: 70
};

const ForecastData = {
  txt_forecast: {
    forecastday:[{
      title: 'Monday',
      fcttext: 'Clear all day',
    }]
  },
  simpleforecast: {
    forecastday:[{
      conditions: 'Clear',
      high: {
        fahrenheit: 70,
      },
      low: {
        fahrenheit: 32,
      }
    }]
  }
};

const TenDay = {
  simpleforecast: {
    forecastday: [{
      date: {
        weekday_short: 'Tue'
      },
      high: {
        fahrenheit: 65
      },
      low: {
        fahrenheit: 28
      }
    },
    {
      date: {
        weekday_short: 'Wed'
      },
      high: {
        fahrenheit: 58
      },
      low: {
        fahrenheit: 20
      }
    }]
  }
};

export default { CurrentData, ForecastData, TenDay };

