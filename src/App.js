import { Routes, Route } from 'react-router-dom'
import PageHeader from './components/header/PageHeader'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'
import PetsListPage from './pages/PetsListPage'
import SinglePetPage from './pages/SinglePetPage'
import VolunteersPage from './pages/VolunteersPage'
import VolunteerPage from './pages/VolunteerPage'
import VolunteerForm from './pages/VolunteerForm'
import { FormProvider } from './components/form/formContext'
import { PetsListProvider } from './components/PetsList/petsListContext'
import { SinglePetProvider } from './components/SinglePet/singlePetContext'
import { VolunteerFormProvider } from './components/VolunteerForm/VolunteerFormContext'
import { SingleVolunteerProvider } from './components/SingleVolunteer/SingleVolunteerContext'
import { VolunteersListProvider } from './components/VolunteersList/VolunteersListContext'

function App() {
  return (
    <>
      <PageHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormProvider><FormPage /></FormProvider>} />
        <Route path="/pets" element={<PetsListProvider><PetsListPage /></PetsListProvider>} />
        <Route path="/pets/:id" element={<SinglePetProvider><SinglePetPage /></SinglePetProvider>} />
        <Route path="/pets/:id/edit" element={<FormProvider><FormPage /></FormProvider>} />
        <Route path="/volunteers" element={<VolunteersListProvider><VolunteersPage /></VolunteersListProvider>} />
        <Route path="/volunteers/:id" element={<SingleVolunteerProvider><VolunteerPage /></SingleVolunteerProvider>} />
        <Route path="/volunteer/form" element={<VolunteerFormProvider><VolunteerForm /></VolunteerFormProvider>} />
        <Route path="/volunteer/:id/edit" element={<VolunteerFormProvider><VolunteerForm /></VolunteerFormProvider>} />
      </Routes>
    </>
  )
}

export default App