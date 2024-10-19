import Brand from "@src/models/user/brand";
import { CreateBrandInput, LoginBrandInput, UpdateBrandInput} from "@src/types/brand";
import { Context } from "@src/types/types";

class BrandService {
    public static async createBrand(input: CreateBrandInput) {
        const brand = await Brand.create(input);
        const token = brand.generateAuthToken();
        return token;
    }
    public static async loginBrand(input: LoginBrandInput) {
        const brand = await Brand.findOne({ email: input.email }).select("+password");
        if (!brand) {
            throw new Error("Brand not found");
        }
        const isMatch = brand.comparePassword(input.password);
        if (!isMatch) {
            throw new Error("Invalid password");
        }
        const token = brand.generateAuthToken();
        return token;
    }
    public static async updateBrand(input: UpdateBrandInput, context: Context) {
        if(!context.brand || !context.brand._id){
            throw new Error("Brand not found");
        }
        const brand = await Brand.findByIdAndUpdate(context.brand._id, input, { new: true });
        return brand;
    }

    public static getBrands() {
        return Brand.find();
    }
    public static getBrand(identifier : string) {
        return Brand.findOne({email: identifier});
    }
    public static getBrandById(id: string) {
        return Brand.findById(id);
    }
}

export default BrandService; 