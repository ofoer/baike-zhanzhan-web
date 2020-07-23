import { TopTab, ClassIfication, ClassKey  } from "../interface/TopTab"

const TOPTABS:Array<TopTab>=[
	{
		title: "推荐",
		enum: ClassIfication.Recommended,
		key: ClassKey.Recommended
	},
	{
		title: "艺术",
		enum: ClassIfication.Art,
		key: ClassKey.Art
	},
	{
		title: "科技",
		enum: ClassIfication.Tech,
		key: ClassKey.Tech
	},
	{
		title: "环保",
		enum: ClassIfication.Environmental,
		key: ClassKey.Environmental
	},
	{
		title: "工业",
		enum: ClassIfication.Factory,
		key: ClassKey.Factory
	},
	{
		title: "宠物",
		enum: ClassIfication.Pet,
		key: ClassKey.Pet
	},
	{
		title: "时尚",
		enum: ClassIfication.Fashion,
		key: ClassKey.Fashion
	}
]
export default TOPTABS