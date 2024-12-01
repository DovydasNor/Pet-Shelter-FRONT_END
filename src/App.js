import { Routes, Route } from 'react-router-dom'
import PageHeader from './components/header/PageHeader'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'
import PetsListPage from './pages/PetsListPage'
import SinglePetPage from './pages/SinglePetPage'
import { FormProvider } from './components/form/formContext'
import { PetsListProvider } from './components/PetsList/petsListContext'
import { SinglePetProvider } from './components/SinglePet/singlePetContext'

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
      </Routes>
    </>
  )
}

export default App