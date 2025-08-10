// 404.tsx (or NotFound.tsx)
import React from "react";
import AppCard from "../../components/AppUI/AppCard";
import AppTypography from "../../components/AppUI/AppTypography";
import { RiEmotionSadLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import AppButton from "../../components/AppUI/AppButton";
import { useNavigate } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <BasicLayout>
      <AppCard>
        <div className="flex flex-col items-center justify-center bg-gray-100 gap-4 p-8">
          <div className="flex flex-col items-center justify-center gap-1">
            <AppTypography
              variant="h1"
              weight="bold"
              className="flex gap-2 items-center"
            >
              <RiEmotionSadLine />
              <span>404</span>
            </AppTypography>
            <AppTypography variant="subheading" weight="bold">
              Page Not Found
            </AppTypography>
          </div>
          <AppTypography variant="caption">
            Sorry, the page you're looking for doesn't exist.
          </AppTypography>
          <AppButton
            variant="outlined"
            size="sm"
            startIcon={<IoHomeOutline />}
            className="mt-4"
            onClick={() => {
              navigate("/", { replace: true });
            }}
          >
            Back to Home
          </AppButton>
        </div>
      </AppCard>
    </BasicLayout>
  );
};

export default NotFound;
