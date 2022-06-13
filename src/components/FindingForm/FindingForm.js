import {useState} from 'react'
import { Form, Box } from './styles';

export default function FindingForm({handleSubmitForm}) {
  const [cityName, setCityName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cityName || cityName.length === 0) {
        return;
    }
    handleSubmitForm(cityName);
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Box>
            <input type="text" value={cityName} onChange={(event) => setCityName(event.target.value)} />
            <button type="submit" onClick={handleSubmit} className="btn">Search</button>
        </Box>
    </Form>
  )
}
