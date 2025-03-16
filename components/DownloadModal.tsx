import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import DownloadForm from "./DownloadForm";

const DownloadModal = () => {
  const [catalogLink, setCatalogLink] = useState("");

  return (
    <Dialog onOpenChange={() => setCatalogLink("")}>
      <DialogTrigger className="border-b border-b-black/30 py-[0.5em] hover:text-primary md:border-b-0">
        Downloads
      </DialogTrigger>
      <DialogContent className="w-[90%] sm:w-[600px] md:w-[700px] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px]">
        <DialogTitle className="text-[2em] font-bold">
          Download PDF Catalogs
        </DialogTitle>
        {catalogLink === "" && (
          <div className="my-[2em] grid place-items-center gap-[1em] sm:grid-cols-2 xl:grid-cols-3">
            <Button
              variant="primary"
              className="w-[24ch]"
              onClick={() => setCatalogLink("/combi.pdf")}
            >
              Combi digital catalog
            </Button>
            <Button
              variant="primary"
              className="w-[24ch]"
              onClick={() => setCatalogLink("/ultra.pdf")}
            >
              Ultra digital catalog
            </Button>
            <Button
              variant="primary"
              className="w-[24ch]"
              onClick={() => setCatalogLink("/ultra-pfc.pdf")}
            >
              Ultra PFC digital catalog
            </Button>
            <Button
              variant="primary"
              className="w-[24ch]"
              onClick={() => setCatalogLink("/prestige.pdf")}
            >
              Prestige digital catalog
            </Button>
            <Button
              variant="primary"
              className="w-[24ch]"
              onClick={() => setCatalogLink("/optimajor.pdf")}
            >
              Optimajor digital catalog
            </Button>
            <Button
              variant="primary"
              className="w-[24ch]"
              onClick={() => setCatalogLink("/commodore.pdf")}
            >
              Commodore digital catalog
            </Button>
          </div>
        )}

        {catalogLink !== "" && <DownloadForm link={catalogLink} />}
      </DialogContent>
    </Dialog>
  );
};

export default DownloadModal;
