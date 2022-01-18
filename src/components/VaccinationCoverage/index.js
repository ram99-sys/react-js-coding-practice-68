import {XAxis, YAxis, Tooltip, Legend, Bar, BarChart} from 'recharts'

import {ChartContainer, Heading} from './styledComponents'

const VaccinationCoverage = props => {
  const {vaccinationDetails} = props
  // console.log(vaccinationDetails)

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <ChartContainer>
      <Heading>Vaccination Coverage</Heading>
      <BarChart
        width={1000}
        height={300}
        data={vaccinationDetails}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Tooltip />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
            fontSize: 12,
            fontFamily: 'Roboto',
          }}
        />
        <Bar
          dataKey="dose1"
          name="Dose 1"
          fill="#2d87bb"
          barSize="20%"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="dose2"
          name="Dose 2"
          fill="#f54394"
          barSize="20%"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  )
}

export default VaccinationCoverage
