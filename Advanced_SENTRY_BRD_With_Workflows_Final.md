## ADVANCED SENTRY 

## **Business Requirements Document (BRD) – Admin Portal Phase 1** 

Version: 1.0 

Business Analyst: Saiprasanna S 

Status: Draft for Client Review 

## **Executive Summary** 

Advanced SENTRY requires a centralized Admin Portal to manage inspection locations and reusable checklist templates. This phase focuses on Controllers and Dispatchers and establishes the foundation for future inspection and responder operations. 

## **Business Objectives** 

- Centralize location management 

- Standardize inspection checklists 

- Reduce manual administration effort 

- Improve operational consistency 

- Prepare for future inspection workflows 

## **Project Scope** 

In Scope: 

- Login & MFA 

- Home Page 

- Location Management 

- Contact Information 

- Address Search & Map Preview 

- Checklist Template Management 

- Assign Templates to Locations 

Out of Scope: 

- Client Portal 

- Responder Mobile App 

- Assignment Management 

- Automated Dispatch 

- Reporting 

- Billing & Payroll 

## **User Role** 

Controller / Dispatcher 

Responsibilities: 

- Create Locations 

- Edit Locations 

- Delete Locations 

- Create Checklist Templates 

- Manage Templates 

- Associate Templates with Locations 

## **Home Page** 

Home Page shall contain: 

- Total Locations 

- Total Checklist Templates 

- Create Location 

- Create Checklist Template 

- Recently Created Locations 

- Recently Modified Templates 

## **Business Workflows** 

Workflow 1 – User Authentication 

Login → Validate Credentials → Send OTP → Verify OTP → Home Page 

Workflow 2 – Create Location 

Locations → Create Location → Enter Location Details → Search Address → Map Preview → Enter Contact Information → Select Existing Checklist OR Create New Checklist → Save Location 

Workflow 3 – Create Checklist Template 

Checklist Templates → Create Template → Add Checklist Items → Configure Rules → Save Template 

Workflow 4 – Create Template During Location Creation 

Create Location → Create New Template → Add Checklist Items → Save Template → Save Location 

Workflow 5 – Edit Location 

Locations List → Select Location → Edit → Save Changes 

Workflow 6 – Delete Location 

Locations List → Delete Location → Confirmation Message → Confirm Delete 

Workflow 7 – Assign Existing Template 

Create/Edit Location → Select Existing Template → Save 

Workflow 8 – Home Navigation 

Home → Create Location / View Locations / Create Template / View Templates 

## **Functional Requirements** 

FR-001 User Login FR-002 Multi-Factor Authentication FR-003 Home Page FR-004 View Locations FR-005 Create Location FR-006 Address Search & Map Preview FR-007 Edit Location FR-008 Delete Location FR-009 Checklist Template Management FR-010 Create Checklist Template FR-011 Checklist Item Configuration FR-012 Assign Checklist Template To Location 

## **Success Criteria** 

- Users can securely log in 

- Users can create, edit, and delete locations 

- Users can create and reuse checklist templates 

- Users can assign templates to locations 

- Location setup can be completed in a single workflow 

