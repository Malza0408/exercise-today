import { Diet, Workout, Attendance, DietImage, Calendar } from "../db";
import { v4 as uuidv4 } from "uuid";

class calendarService {
  static async addCalories({ userId, whenDate, calorieArray }) {
    if (!whenDate || !calorieArray) {
      const errorMessage = "whenDate, calorieArray를 모두 입력해주세요";
      throw new Error(errorMessage);
    }

    if (calorieArray.length !== 4) {
      const errorMessage = "calorieArray 길이를 확인해주세요.";
      throw new Error(errorMessage);
    }

    await Calendar.deleteByDate({ userId, whenDate });

    const itemId = uuidv4();

    const titleList = ["아침  +", "점심  +", "저녁  +", "운동  -"];
    const startList = ["T08:00:00", "T13:00:00", "T18:00:00", "T20:00:00"];
    const colorList = ["yellow", "pink", "orange", "red"];
    const calories = [];
    for (let i = 0; i < calorieArray.length; i++) {
      const subSchema = {
        title: `${titleList[i]}${calorieArray[i]}`,
        start: `${whenDate}${startList[i]}`,
        backgroundColor: `${colorList[i]}`,
      };
      calories.push(subSchema);
    }
    const newItem = { itemId, userId, whenDate, calories };

    const createdNewItem = await Calendar.create({ newItem });
    createdNewItem.errorMessage = null;

    return createdNewItem;
  }

  static async getCaloriesByDate({ userId, whenDate }) {
    const item = await Calendar.findCaloriesByDate({
      userId,
      whenDate,
    });
    if (!item) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }
    return item;
  }

  static async getCaloriesByMonth({ userId, whenMonth }) {
    const searchOpt = { $regex: whenMonth };
    const items = await Calendar.findCaloriesByMonth({
      userId,
      whenDate: searchOpt,
    });
    if (!items) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }

    const itemList = items.reduce((acc, cur) => {
      acc = acc.concat(cur.calories);
      return acc;
    }, []);
    return itemList;
  }

  static async deleteCalories({ itemId }) {
    const deletedResult = await Calendar.deleteByItemId({ itemId });
    if (!deletedResult) {
      const errorMessage =
        "해당하는 내역이 없습니다. 다시 한 번 확인해 주세요.";
      throw new Error(errorMessage);
    }

    return deletedResult;
  }

  static async deleteCaloriesList({ userId }) {
    await Calendar.deleteByUserId({ userId });
  }

  static async addItemList({ userId, whenDate, itemArray }) {
    if (!whenDate || !itemArray) {
      const errorMessage = "whenDate, itemArray를 모두 입력해주세요";
      throw new Error(errorMessage);
    }

    if (!itemArray.diet) {
      const errorMessage = "itemArray에 diet값을 입력해주세요";
      throw new Error(errorMessage);
    }

    if (!itemArray.workout) {
      const errorMessage = "itemArray에 workout값을 입력해주세요";
      throw new Error(errorMessage);
    }

    for (const { type, category, volume } of itemArray.diet) {
      if (!type || !category || !volume) {
        const errorMessage = "type, category, volume을 모두 입력해주세요";
        throw new Error(errorMessage);
      }

      const typeList = ["breakfast", "lunch", "dinner"];

      if (!typeList.includes(type)) {
        const errorMessage = "breakfast, lunch, dinner 중에서만 입력해주세요";
        throw new Error(errorMessage);
      }

      const categoryList = [
        "견과류",
        "치즈",
        "잼/버터",
        "케이크류",
        "면류",
        "빵류",
        "육류",
        "유제품",
        "채소",
        "콩류",
        "주류",
        "해산물",
        "과일",
        "스프",
        "사탕",
        "패스트푸드",
        "음료(알코올x)",
        "시리얼",
        "아이스크림",
        "감자류",
      ];

      if (!categoryList.includes(category)) {
        const errorMessage = "카테고리를 다시 한 번 확인해 주세요.";
        throw new Error(errorMessage);
      }
    }

    for (const { category, name, time } of itemArray.workout) {
      if (!category || !name || !time) {
        const errorMessage = "category, name, time을 모두 입력해주세요";
        throw new Error(errorMessage);
      }

      const categoryList = [
        "유산소",
        "무산소",
        "구기",
        "라켓",
        "육상",
        "수상",
        "댄스",
        "사이클",
        "양궁",
        "복싱",
        "격투",
        "기타",
      ];

      if (!categoryList.includes(category)) {
        const errorMessage = "카테고리를 다시 한 번 확인해 주세요.";
        throw new Error(errorMessage);
      }
    }

    await Diet.deleteByDate({ userId, whenDate });
    for (const { type, category, volume } of itemArray.diet) {
      const newItem = { userId, whenDate, type, category, volume };
      await Diet.create({ newItem });
    }

    await Workout.deleteByDate({ userId, whenDate });
    for (const { category, name, time } of itemArray.workout) {
      const newItem = { userId, whenDate, category, name, time };
      await Workout.create({ newItem });
    }
  }

  static async getItemList({ userId, whenDate }) {
    const itemList1 = await Attendance.findByDate({ userId, whenDate });
    const itemList2 = await DietImage.findByDate({ userId, whenDate });
    const itemList3 = await Diet.findByDate({ userId, whenDate });
    const itemList4 = await Workout.findByDate({ userId, whenDate });
    const itemAll = {
      attendance: itemList1,
      dietimage: itemList2,
      diet: itemList3,
      workout: itemList4,
    };

    return itemAll;
  }
}
export { calendarService };
