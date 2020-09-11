export default imageSet;

type imageSet = {
    image_set_id: string,
    image_id: string,
    description: string,
    type_id: string,
    type_description: string,
    image_path: string,
    [prop: string]: any,
};
