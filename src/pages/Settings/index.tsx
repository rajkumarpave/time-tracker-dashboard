import React from "react";
import AppCard from "../../components/AppUI/AppCard";
import AppTypography from "../../components/AppUI/AppTypography";
import BasicLayout from "../../layout/BasicLayout";

function Settings() {
  return (
    <BasicLayout>
      <AppCard>
        <div className="flex items-center justify-center p-2">
          <AppTypography>Settings Page</AppTypography>
        </div>
      </AppCard>
    </BasicLayout>
  );
}

export default Settings;
