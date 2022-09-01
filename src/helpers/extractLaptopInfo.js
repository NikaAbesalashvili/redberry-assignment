export const extractLaptopInfo = (laptopInfo) => {
    const {
        laptop_name,
        laptop_image,
        laptop_brand_id,
        laptop_cpu,
        laptop_cpu_cores,
        laptop_cpu_threads,
        laptop_ram,
        laptop_hard_drive_type,
        laptop_state,
        laptop_price,
    } = laptopInfo;

    return {
        laptop_name,
        laptop_image,
        laptop_brand_id,
        laptop_cpu,
        laptop_cpu_cores,
        laptop_cpu_threads,
        laptop_ram,
        laptop_hard_drive_type,
        laptop_state,
        laptop_price,
    };
};
