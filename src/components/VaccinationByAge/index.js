import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import {ContainerElement, Heading} from './styledComponents'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props
  // console.log(vaccinationByAgeDetails)

  return (
    <ContainerElement>
      <Heading>Vaccination by age</Heading>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="40%"
            data={vaccinationByAgeDetails}
            startAngle={0}
            endAngle={360}
            innerRadius="0"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#5a8dee" />
            <Cell name="45-60" fill=" #a3df9f" />
            <Cell name="Above 60" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
          />
        </PieChart>
      </ResponsiveContainer>
    </ContainerElement>
  )
}

export default VaccinationByAge
