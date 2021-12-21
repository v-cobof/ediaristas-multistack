import type { NextPage } from 'next'
import PageTitle from '../ui/components/data-display/PageTitle/PageTitle'
import SafeEnvironment from '../ui/components/feedback/SafeEnvironment/SafeEnvironment'
import UserInformation from '../ui/components/data-display/UserInformation/UserInformation'

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle title={'Conheça os profissionais'} subtitle={'Olha só mais que bacana'} />
      <UserInformation
        name={'Victor Cobo'}
        picture={'https://github.com/v-cobof.png'}
        rating={3}
        description={'São Paulo'}
      />

      <UserInformation
        name={'João Santos'}
        picture={''}
        rating={3}
        description={'São Paulo'}
      />
    </div>
  )
}

export default Home
