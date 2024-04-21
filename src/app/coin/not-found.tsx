import Container from '@/components/Container'
import ItemNotFound from '@/components/ItemNotFound'
import SearchCard from '@/components/SearchCard'

const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-5">
            <SearchCard />
            <Container>
                <ItemNotFound />
            </Container>
        </div>
    )
}

export default NotFound