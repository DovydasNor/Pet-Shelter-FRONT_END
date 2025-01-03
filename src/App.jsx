import { Routes, Route } from 'react-router-dom'
import PageHeader from './components/header/PageHeader'
import HomePage from './pages/HomePage/HomePage'
import FormPage from './pages/FormPage/FormPage'
import PetsListPage from './pages/PetsListPage/PetsListPage'
import SinglePetPage from './pages/SinglePetPage/SinglePetPage'
import VolunteersPage from './pages/VolunteersPage/VolunteersPage'
import VolunteerPage from './pages/VolunteerPage/VolunteerPage'
import VolunteerForm from './pages/VolunteerForm/VolunteerForm'
import { FormProvider } from './components/form/formContext'
import { PetsListProvider } from './components/PetsList/petsListContext'
import { SinglePetProvider } from './components/SinglePet/singlePetContext'
import { VolunteerFormProvider } from './components/VolunteerForm/VolunteerFormContext'
import { SingleVolunteerProvider } from './components/SingleVolunteer/SingleVolunteerContext'
import { VolunteersListProvider } from './components/VolunteersList/VolunteersListContext'
import DonationsPage from './pages/donationsPage/DonationsPage'
import Footer from './components/footer/Footer'
import { DonationsProvider } from './components/donations/donationsContext'
import './App.scss'
import LoginRegisterPage from './pages/loginRegisterPage/LoginRegisterPage'
import { LoginRegistrationProvider } from './components/LoginRegisterItem/LoginRegistrationContext'
import UsersPage from './pages/UsersPage/UsersPage'
import { UsersProvider } from './components/users/UsersContext'
import UserProfilePage from './pages/userProfilePage/UserProfilePage'
import UserProfileProvider from './components/userProfile/UserProfileContext'

function App() {
  return (
    <div className="container">
      <LoginRegistrationProvider>
        <PageHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginRegisterPage />} />
          <Route path="/signup" element={<LoginRegisterPage />} />
          <Route path="/form" element={<FormProvider><FormPage /></FormProvider>} />
          <Route path="/pets" element={<PetsListProvider><PetsListPage /></PetsListProvider>} />
          <Route path="/pets/:id" element={<SinglePetProvider><SinglePetPage /></SinglePetProvider>} />
          <Route path="/pets/:id/edit" element={<FormProvider><FormPage /></FormProvider>} />
          <Route path='/users' element={<UsersProvider><UsersPage /></UsersProvider> } />
          <Route path='/users/:id' element={<UserProfileProvider><UserProfilePage /></UserProfileProvider>} />
          <Route path="/volunteers" element={<VolunteersListProvider><VolunteersPage /></VolunteersListProvider>} />
          <Route path="/volunteers/:id" element={<SingleVolunteerProvider><VolunteerPage /></SingleVolunteerProvider>} />
          <Route path="/volunteer/form" element={<VolunteerFormProvider><VolunteerForm /></VolunteerFormProvider>} />
          <Route path="/donations" element={<DonationsProvider><DonationsPage /></DonationsProvider>} />
        </Routes>
        <Footer />
      </LoginRegistrationProvider>
    </div>
  )
}

export default App