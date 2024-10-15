import Brand from "@src/models/user/brand";
import { CreateBrandInput} from "@src/types/brand";

class BrandService {
    public static async createBrand(input: CreateBrandInput) {
        const brand = await Brand.create(input);
        return brand;
    }

    public static getBrands() {
        return Brand.find();
    }
    public static getBrand(brandId: string) {
        return Brand.findOne({ $or: [{ brandId: brandId }] });
    }
    public static getBrandById(id: string) {
        return Brand.findById(id);
    }
}

export default BrandService; 