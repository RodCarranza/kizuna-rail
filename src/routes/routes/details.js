import { getCompleteRouteDetails } from "../../models/model.js";

export default async (req, res) => {
  const { routeId } = req.params;

  const details = await getCompleteRouteDetails(routeId);

  if (!details) {
    return res.status(404).render("errors/404", {
      title: "Route Not Found",
      error: "The route you are looking for does not exist.",
    });
  }

  res.render("routes/details", {
    title: "Route Details",
    details,
  });
};
