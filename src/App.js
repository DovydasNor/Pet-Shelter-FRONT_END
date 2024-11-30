import { Routes, Route } from 'react-router-dom'
import PageHeader from './components/header/PageHeader'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'
import PetsListPage from './pages/PetsListPage'
import SinglePetPage from './pages/SinglePetPage'
import { FormProvider } from './components/form/formContext'

function App() {
  return (
    <>
      <PageHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormProvider> <FormPage /> </FormProvider>} />
        <Route path="/pets" element={<PetsListPage />} />
        <Route path="/pets/:id" element={<SinglePetPage />} />
      </Routes>
    </>
  )
}

export default App