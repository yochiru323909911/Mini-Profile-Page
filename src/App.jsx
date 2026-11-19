import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'

const profiles = [
  {
    name: 'Alex Morgan',
    description: 'A friend who loves weekend hikes and discovering new cafes.',
    personType: 'Friend',
    initials: 'AM',
  },
  {
    name: 'Jordan Lee',
    description: 'A thoughtful teacher who makes learning something to look forward to.',
    personType: 'Teacher',
    initials: 'JL',
  },
  {
    name: 'Sam Rivera',
    description: 'A curious student exploring design, technology, and creative ideas.',
    personType: 'Student',
    initials: 'SR',
  },
]

function App() {
  return (
    <div className="page">
      <Header />
      <main className="profiles">
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} {...profile} />
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default App
