import { LineChart, Line } from 'recharts';
export default function SubjectLineChart() {

const subjectMarks = [
    { "id": 1, "name": "Alice", "math": 78, "chemistry": 82, "physics": 79 },
    { "id": 2, "name": "Bob", "math": 85, "chemistry": 74, "physics": 88 },
    { "id": 3, "name": "Charlie", "math": 92, "chemistry": 89, "physics": 91 },
    { "id": 4, "name": "David", "math": 74, "chemistry": 76, "physics": 72 },
    { "id": 5, "name": "Ella", "math": 88, "chemistry": 84, "physics": 85 },
    { "id": 6, "name": "Frank", "math": 65, "chemistry": 71, "physics": 68 },
    { "id": 7, "name": "Grace", "math": 90, "chemistry": 92, "physics": 94 },
    { "id": 8, "name": "Hannah", "math": 81, "chemistry": 78, "physics": 83 },
    { "id": 9, "name": "Ian", "math": 76, "chemistry": 80, "physics": 79 },
    { "id": 10, "name": "Jane", "math": 83, "chemistry": 86, "physics": 87 }
  ]

return (
<div className='w-10/12 mx-auto'>
<h1 className='text-3xl font-bold'>Subject Marks Chart Of Students</h1>
<LineChart width={400} height={400} data={subjectMarks}>
    <Line type="monotone" dataKey="math" stroke="#8884d8" />
    <Line type="monotone" dataKey="physics" stroke="red" />
    <Line type="monotone" dataKey="chemistry" stroke="green" />
  </LineChart>
</div>
)
}
