import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
export default function SalesBarChart() {

    const salesData = [
        {
          "year": 2018,
          "sales": 50000
        },
        {
          "year": 2019,
          "sales": 55000
        },
        {
          "year": 2020,
          "sales": 62000
        },
        {
          "year": 2021,
          "sales": 48000
        },
        {
          "year": 2022,
          "sales": 70000
        },
        {
          "year": 2023,
          "sales": 75000
        }
      ]

    return (
    <div className='w-10/12 mx-auto'>
    <h1 className='text-3xl font-bold my-10'>Sales data of 6 years</h1>
        <BarChart width={800} height={400} data={salesData}>
        <Bar dataKey="sales" fill="#8884d8" />
        <XAxis dataKey="year"></XAxis>
        <YAxis dataKey="sales"></YAxis>
        <Tooltip></Tooltip>
        </BarChart>
    </div>
  )
}
