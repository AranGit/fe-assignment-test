import { GroupedData, User } from "@/constants/data";
import axios from "axios";

export const transformUserData = (users: User[]): GroupedData => {
  const grouped = users.reduce((acc: GroupedData, user) => {
    const dept = user.company.department;

    if (!acc[dept]) {
      acc[dept] = {
        male: 0,
        female: 0,
        ageRange: "",
        hair: {},
        addressUser: {},
        _minAge: user.age,
        _maxAge: user.age,
      };
    }

    const target = acc[dept];

    if (user.gender === "male") {
      target.male++;
    } else {
      target.female++;
    }

    if (user.age < target._minAge!) target._minAge = user.age;
    if (user.age > target._maxAge!) target._maxAge = user.age;

    target.hair[user.hair.color] = (target.hair[user.hair.color] || 0) + 1;
    target.addressUser[`${user.firstName}${user.lastName}`] =
      user.address.postalCode;

    return acc;
  }, {});

  Object.keys(grouped).forEach((dept) => {
    const d = grouped[dept];
    d.ageRange =
      d._minAge === d._maxAge ? `${d._minAge}` : `${d._minAge}-${d._maxAge}`;
    delete d._minAge;
    delete d._maxAge;
  });

  return grouped;
};

async function UsersPage() {
  const res = await axios.get("https://dummyjson.com/users");
  const transformedData = transformUserData(res.data.users);

  return (
    <div className="p-6">
      <pre>{JSON.stringify(transformedData, null, 2)}</pre>
    </div>
  );
}

export default UsersPage;
