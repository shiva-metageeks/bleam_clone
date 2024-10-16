import BrandService from "@src/services/brand";
import { Context } from "@src/types/types";
import { CreateBrandInput } from "@src/types/brand";


const queries = {
    getBrand: async (parent: any, { brandId }: { brandId: string }, context: Context) => {
        // if (!context.user) {
        //     throw new Error("User not authenticated");
        // }
        const brand = await BrandService.getBrand(brandId);
        return brand;
    },
}

const mutations = {
    createBrand: async (parent: any, { payload }: { payload: CreateBrandInput }, context: Context) => {
        const brand = await BrandService.createBrand(payload);
        return brand;
    }
}

export const resolvers = {
    queries,
    mutations
}
