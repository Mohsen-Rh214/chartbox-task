import Container from "@/components/Container";
import SearchCard from "@/components/SearchCard";
import getData from "@/libs/getData";
import Image from "next/image";
import { notFound } from "next/navigation";

const getCoin = async (slug: string) => {
  const res = await getData(slug);
  if (res.error) return undefined;
  return res;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const coin = await getCoin(params.slug)
  console.log('my coind: ', coin)
  if (!coin) return notFound();

  return <div className="flex min-h-screen flex-col items-center justify-center gap-5">
    <SearchCard />
    <Container styles="h-[300px]">
      <div className="flex flex-col w-[80%] h-full justify-center items-center">
        <div className="h-14 w-14">
        <Image src={coin.image.large} alt="" width={100} height={100}/>
        </div>
        <div className="flex justify-between w-full p-name border-b-2 border-[#EEEEEE] py-4">
          <p className="text-[#757575]">Name</p>
          <p className="font-semibold">{coin.name}</p>
        </div>
        <div className="flex justify-between w-full border-b-2 border-[#EEEEEE] py-4">
          <p className="text-[#757575]">Symbol</p>
          <p className="font-semibold">{coin.symbol.toUpperCase()}</p>
        </div>
        <div className="flex justify-between w-full py-4">
          <p className="text-[#757575]">ID</p>
          <p className="font-semibold">{coin.id}</p>
        </div>
      </div>
    </Container>
  </div>
}