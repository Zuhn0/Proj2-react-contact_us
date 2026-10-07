import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Navigation from './components/Navigation/Navigation'

function App() {
  return <div>
    <Navigation></Navigation>
    <ContactHeader></ContactHeader>
    <ContactForm></ContactForm>
  </div>
}

export default App
