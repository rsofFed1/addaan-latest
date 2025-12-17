import { redirect } from 'next/navigation'
import { Params } from '@/types/locale';

async function page({params} : {params : Promise<Params>} ) {
    redirect(`/${(await params).locale}/home`)
}

export default page
