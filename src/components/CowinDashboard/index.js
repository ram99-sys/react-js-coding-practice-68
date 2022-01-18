import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {
  CowinContainer,
  LogoImage,
  Heading,
  GlobalStyles,
  IconHeading,
  MainHeading,
  LoaderContainer,
  FailureContainer,
  FailureImage,
} from './styledComponents'
// AiFillPlusCircle

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiConstants.initial,
    vaccinationByDateDataList: [],
    vaccinationByAgeDataList: [],
    vaccinationByGenderList: [],
  }

  componentDidMount() {
    this.getCovidVaccinationData()
  }

  getCovidVaccinationData = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const covidVaccinationDataApiUrl =
      'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(covidVaccinationDataApiUrl)
    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      // console.log(updatedData)

      const last7DaysVaccinationData = updatedData.last7DaysVaccination.map(
        eachObject => ({
          vaccineDate: eachObject.vaccine_date,
          dose1: eachObject.dose_1,
          dose2: eachObject.dose_2,
        }),
      )
      // console.log(last7DaysVaccinationData)

      const vaccinationByAgeData = updatedData.vaccinationByAge.map(
        eachObject => ({
          age: eachObject.age,
          count: eachObject.count,
        }),
      )
      // console.log(vaccinationByAgeData)

      const vaccinationByGenderData = updatedData.vaccinationByGender.map(
        eachObject => ({
          gender: eachObject.gender,
          count: eachObject.count,
        }),
      )
      // console.log(vaccinationByGenderData)
      this.setState({
        apiStatus: apiConstants.success,
        vaccinationByDateDataList: last7DaysVaccinationData,
        vaccinationByAgeDataList: vaccinationByAgeData,
        vaccinationByGenderList: vaccinationByGenderData,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {
      vaccinationByDateDataList,
      vaccinationByGenderList,
      vaccinationByAgeDataList,
    } = this.state
    // console.log(vaccinationByDateDataList)
    return (
      <>
        <VaccinationCoverage vaccinationDetails={vaccinationByDateDataList} />
        <VaccinationByGender
          vaccinationByGenderDetails={vaccinationByGenderList}
        />
        <VaccinationByAge vaccinationByAgeDetails={vaccinationByAgeDataList} />
      </>
    )
  }

  renderInProgressView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </FailureContainer>
  )

  renderStatusView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.inProgress:
        return this.renderInProgressView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <CowinContainer>
          <IconHeading>
            <LogoImage
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <Heading>CO-WIN</Heading>
          </IconHeading>
          <MainHeading>CoWIN Vaccination in India</MainHeading>
          {this.renderStatusView()}
        </CowinContainer>
      </>
    )
  }
}

export default CowinDashboard
