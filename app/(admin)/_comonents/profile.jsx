import { currentUser } from "@clerk/nextjs";

export const Profile = async () => {
  const { firstName,lastName } = await currentUser();
  return (
    <div className="w-full flex items-center space-x-1">
      <div className="truncate text-sm w-fit">
        {firstName} {lastName}
      </div> 
      <div className="text-sky-500 text-sm">(Administrator)</div>
    </div>
  );
};
