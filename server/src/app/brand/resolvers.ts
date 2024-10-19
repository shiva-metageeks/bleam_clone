import BrandService from "@src/services/brand";
import { Context } from "@src/types/types";
import { CreateBrandInput, LoginBrandInput, UpdateBrandInput } from "@src/types/brand";

const queries = {
    // getBrands: async (parent: any, args: any, context: Context) => {
    //     const brands = await BrandService.getBrands();
    //     return brands;
    // },
    // getBrand: async (parent: any, { identifier }: { identifier: string }, context: Context) => {
    //     if (!context.user) {
    //         throw new Error("User not authenticated");
    //     }
    //     const brand = await BrandService.getBrand(identifier);
    //     return brand;
    // },
    // getBrandById: async (parent: any, { id }: { id: string }, context: Context) => {
    //     const brand = await BrandService.getBrandById(id);
    //     return brand;
    // },
    getCurrentBrand: async (parent: any, args: any, context: Context) => {
        if (!context.brand || !context.brand.id) {
            throw new Error("Brand not authenticated");
        }
        const brand = await BrandService.getBrandById(context.brand.id);
        return brand;
    }
}

const mutations = {
    createBrand: async (parent: any, { payload }: { payload: CreateBrandInput }) => {
        const brand = await BrandService.createBrand(payload);
        return brand;
    },
    loginBrand: async (parent: any, { payload }: { payload: LoginBrandInput }) => {
        const brand = await BrandService.loginBrand(payload);
        if(!brand){
            throw new Error("Brand not found");
        }
        return brand;
    },
    updateBrand: async (parent: any, { payload }: { payload: UpdateBrandInput }, context: Context) => {
        const brand = await BrandService.updateBrand(payload, context);
        return brand;
    }
}

export const resolvers = {
    queries,
    mutations
}
