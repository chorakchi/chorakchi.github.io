import { Resume } from '../components/templates/Resume/Resume'
import { mockData as resume } from '../components/templates/Resume/Resume.mock'

export default function Home() {
  return (
    <Resume {...resume}/>
  )
}
