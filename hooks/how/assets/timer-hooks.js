function Timer(props) {
  const [ value, setValue ] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setValue(true), 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>{value ? 'Done!' : 'Waiting...'}</div>
  )
}

function useTimer(delay) {
  const [ value, setValue ] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setValue(true), delay)

    return () => clearTimeout(timer)
  }, [])

  return value
}

function Timer(props) {
  const value = useTimer(2500)

  return (
    <div>{value ? 'Done!' : 'Waiting...'}</div>
  )
}

function Timer(props) {
  const value1 = useTimer(1500)
  const value2 = useTimer(2500)

  return (
    <>
      <div>{value1 ? 'Done!' : 'Waiting...'}</div>
      <div>{value2 ? 'Done!' : 'Waiting...'}</div>
    </>
  )
}
