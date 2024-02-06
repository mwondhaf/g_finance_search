import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import {
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 0,
            color: "text.primary",
          }}
        >
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const TabChip = ({
    label,
    onClick,
  }: {
    label: string;
    onClick?: () => void;
  }) => {
    return (
      <Chip
        sx={{ marginRight: 2, borderBottom: 0 }}
        label={label}
        onClick={onClick}
      />
    );
  };

  const tabs = [
    {
      label: "Item One",
      value: 0,
      listItems: [
        {
          name: "Apple",
          count: 3,
        },
        {
          name: "Banana",
          count: 2,
        },
      ],
    },
    {
      label: "Item Two",
      value: 1,
      listItems: [
        {
          name: "Orange",
          count: 3,
        },
        {
          name: "Passion",
          count: 2,
        },
      ],
    },
    {
      label: "Item Three",
      value: 2,
      listItems: [
        {
          name: "Kiwi",
          count: 3,
        },
        {
          name: "Jackfruit",
          count: 2,
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        width: "500px",
        bgcolor: "white",
        border: 2,
        borderColor: "ActiveBorder",
      }}
    >
      <Box sx={{ borderBottom: 0, pt: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((tab, index) => (
            <TabChip
              onClick={() => setValue(tab.value)}
              key={index}
              label={tab.label}
              {...a11yProps(tab.value)}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel value={value} index={index} key={index}>
          <Box sx={{ flexGrow: 1 }}>
            <List>
              {tab.listItems.map((item, index) => (
                <ListItem disablePadding key={index}>
                  <ListItemButton>
                    <ListItemText primary={item.name} />
                    <ListItemText primary={item.count} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </CustomTabPanel>
      ))}
    </Box>
  );
}
