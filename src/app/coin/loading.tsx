import Container from "@/components/Container"
import SearchCard from "@/components/SearchCard"
import Image from "next/image"
import LoadingSvg from '../../../public/loading.svg'

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5">
      <SearchCard />
      <Container>
        <Image src={LoadingSvg} alt="loading" width={50} height={50}/>
      </Container>
    </div>
  )
}

export default Loading