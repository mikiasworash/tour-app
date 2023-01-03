const getData = async () => {
  try {
    const result = await sql.query`SELECT * FROM media`
    console.log(result)
  } catch (err) {
    console.log('Could not fetch data')
  }
}

getData()
